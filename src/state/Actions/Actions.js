export const updateCategoryArray = (categoryArray) => {
    return {
        type: "CATEGORY_ARRAY",
        categoryArray
    }
}

export const updateSubCategoryArray = (subCategoryArray) => {
    return {
        type: "SUBCATEGORY_ARRAY",
        subCategoryArray
    }
}

export const updateNumOfCat = (numberOfCategories) => {
    return {
        type: "NUM_OF_CATEGORIES",
        numberOfCategories
    }
}

export const updateNumOfSubCat = (numberOfSubCategories) => {
    return {
        type: "NUM_OF_SUBCATEGORIES",
        numberOfSubCategories
    }
}

export const handleResult = () => {
    return {
        type: "RESULT"
    }
}