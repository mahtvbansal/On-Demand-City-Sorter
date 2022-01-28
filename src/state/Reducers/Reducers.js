export const categoryReducer = (state = [], action) => {
    
    if(action.type === 'CATEGORY_ARRAY'){
        return action.categoryArray;
    }
    else{
        return state;
    }
}

export const subCategoryReducer = (state = [], action) => {
    
    if(action.type === 'SUBCATEGORY_ARRAY'){
        return action.subCategoryArray;
    }
    else{
        return state;
    }
}

export const numOfCategories = (state = 0, action) => {
    if(action.type === 'NUM_OF_CATEGORIES'){
        return action.numberOfCategories;
    }
    else{
        return state;
    }
}

export const numOfSubCategories = (state = 0, action) => {
    if(action.type === 'NUM_OF_SUBCATEGORIES'){
        return action.numberOfSubCategories;
    }
    else{
        return state;
    }
}

