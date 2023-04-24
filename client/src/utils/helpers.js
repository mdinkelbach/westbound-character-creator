// Validates email is entered in standard format
export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  // Gets saved Favorites product ids from localStorage
  export const getFaveProductIds = () => {
    const savedFaveProductIds = localStorage.getItem('savedFave')
      ? JSON.parse(localStorage.getItem('savedFave'))
      : [];
      return savedFaveProductIds;
  };

  // Saves a Favorite product id to localStorage and prevents duplicates
  export const saveFaveIds = (productIdArr) => {
    if (productIdArr.length) {
      localStorage.setItem('savedFave', JSON.stringify(productIdArr));
    } else {
      localStorage.removeItem('savedFave');
    }
  };

  // Remove a Favorite product id from localStorage and updates array
  export const removeFaveId = (productId) => {
    const savedFaveProductIds = localStorage.getItem('savedFave')
      ? JSON.parse(localStorage.getItem('savedFave'))
      : null;

    if(!savedFaveProductIds){
      return false;
    }
    const updatedSavedFaves = savedFaveProductIds?.filter((savedFaveProductIds) => savedFaveProductIds !== productId );
    localStorage.setItem('savedFave', JSON.stringify(updatedSavedFaves));
    return true;
  };