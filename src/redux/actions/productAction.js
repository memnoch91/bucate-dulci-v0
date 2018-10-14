const CREATE_PRODUCT_SUCCESS = "CREATE_PRODUCT_SUCCESS"
const CREATE_PRODUCT_ERROR = "CREATE_PRODUCT_ERROR"

export const createProduct = (product) => {
    return (dispatch, getState, {getFirestore}) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('products').add({
          ...product,
          name: "cheesekae",
          price: 100,
          stoc: 1,
          greutate: 860,
          images:['https://drive.google.com/file/d/17KtIpYPLoarcED7wFriI1HSxlMRl2Jmg/view?usp=sharing'],
        }).then(() => {
          dispatch({ type: CREATE_PRODUCT_SUCCESS });
        }).catch(err => {
          dispatch({ type: CREATE_PRODUCT_ERROR }, err);
        });
      }
}
