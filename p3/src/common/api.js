import * as firebase from 'firebase/app';
import 'firebase/firestore';

export default class Api {

    constructor(options) {
        firebase.initializeApp({
            apiKey: options.apiKey,
            authDomain: options.projectId + '.firebaseapp.com',
            databaseURL: 'https://' + options.projectId + '.firebaseio.com',
            projectId: options.projectId
        });

        this.api = firebase.firestore();
    }

    /**
     * Get a document (row) from a `collection` (table) where `field` == `value`
     * ex: get('goals', 'evidence', 'straight A's')
     */
    async find(collection, field, value) {
        try {
            const querySnapshot = await this.api.collection(collection).where(field, "==", value)
                .get();
            return querySnapshot.docs.shift().data();
        } catch (err) {
            return 'Error retrieving documents (aka rows): ' + err;
        }
    }

    /**
     * Get a document (row) from a `collection` (table) where `field` == `value`
     * ex: get('goals', 'evidence', 'straight A's')
     */
    async findGreaterThan(collection, field, value) {
        try {
            const querySnapshot = await this.api.collection(collection).where(field, ">=", value)
                .get();
            return querySnapshot.docs.shift().data();
        } catch (err) {
            return 'Error retrieving documents (aka rows): ' + err;
        }
    }

    /**
     * Get a document (aka row) from a collection (table) by its id
     */
    get(collection, id) {
        return this.find(collection, 'id', id);
    }

    /**
     * Get all the documents (rows) from a collection (table)
     */
    async all(collection) {
        let results = {};
        const querySnapshot = await this.api
            .collection(collection)
            .get();
        querySnapshot.forEach(doc => {
            results[doc.id] = doc.data();
        });
        return results;
    }

    /**
     * Add a document (row) to a collection (table)
     */
    async add(collection, document) {
        try {
            const docRef = await this.api
                .collection(collection)
                .add(document);
            return docRef.id;
        } catch (err) {
            return 'Error adding (inserting) document (row): ' + err;
        }
    }

    /**
     * Delete a document (row) from a collection (table) by id
     */
    delete(collection, id) {
        this.api
            .collection(collection)
            .doc(id)
            .delete();
    }
}