// Import the functions you need from firebase and react
import { getDocs, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../config/firebase";
import { useEffect } from "react";
import { Post } from "./post";

// Export interface post
export interface Post {
   id: string; 
   userId: string;
   title: string;
   username: string;
   description: string;
}

// Export const main
export const Main = () => {
    const [postsList, setPostsList] = useState<Post[] | null>(null);
    const postsRef = collection(db, "posts");

    const getPosts = async () => {
        const data = await getDocs(postsRef);
        setPostsList(
            data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
        );
    };

    useEffect(() => {
        getPosts();
    }, []);

  
    return (
        <div> 
            {postsList?.map((post) => (
                <Post post={post} />
            ))}
        </div>
    );
};