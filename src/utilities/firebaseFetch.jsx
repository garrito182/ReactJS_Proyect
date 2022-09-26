import { query, where, collection, getDocs, orderBy } from '@firebase/firestore';
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const firestoreFetch = async (idCategory) => {

    let qry;
    if (idCategory) {
        qry = query(collection(db, "products"), where("categoryId", '==', parseInt(idCategory)));
    } else {
        qry = query(collection(db, "products"), orderBy("id"));
    }

    const querySnapshot = await getDocs(qry);
    const dataFromFirestore = querySnapshot.docs.map(items => ({
        id: items.id,
        ...items.data()
    }));
    return dataFromFirestore;
}

export const firestoreFetchOne = async (idItem) => {
    const docRef = doc(db, "products", idItem);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {
            id: idItem,
            ...docSnap.data()
        }
    } else {
        console.log("No such document!");
    }
}