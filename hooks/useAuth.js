import { createContext, useContext, useEffect, useState } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { 
    GoogleAuthProvider, 
    signInWithCredential, 
    signOut,
    onAuthStateChanged 
} from "firebase/auth";  
import { auth } from "../firebase";  // ✅ Ensure Firebase is correctly initialized

WebBrowser.maybeCompleteAuthSession();  // ✅ Ensures proper redirection

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [request, response, promptAsync] = Google.useAuthRequest({
        androidClientId: '557735113830-19b5ejf9km29vrmpmru2paaq0aoksson.apps.googleusercontent.com',
        iosClientId: '557735113830-m8ekch58nf7bthbjhms9ui3is4epa88o.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
    });

    // Listen for authentication state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (response?.type === 'success') {
            const { idToken } = response.authentication;  // ✅ Correctly extracting idToken
            const credential = GoogleAuthProvider.credential(idToken);
            
            // ✅ Sign in with Firebase using the Google credential
            signInWithCredential(auth, credential)
                .then((userCredential) => {
                    setUser(userCredential.user);
                    console.log("✅ Google Sign-In Success:", userCredential.user);
                })
                .catch((error) => {
                    console.error("❌ Firebase Sign-In Error:", error.message);
                });
        }
    }, [response]);

    const signInWithGoogle = async () => {
        try {
            await promptAsync();
        } catch (error) {
            console.error("❌ Google Sign-In Error:", error.message);
        }
    };

    return (
        <AuthContext.Provider value={{ user, signInWithGoogle }}>
            {children}
        </AuthContext.Provider>
    );
};

export default function useAuth() {
    return useContext(AuthContext);
}
