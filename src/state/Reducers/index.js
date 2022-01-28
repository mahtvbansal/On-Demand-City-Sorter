import {combineReducers} from 'redux';
import {categoryReducer, numOfCategories, subCategoryReducer, numOfSubCategories} from './Reducers'

const reducers = combineReducers({
    category_Array: categoryReducer,
    numOfCat : numOfCategories, 
    subCategory_Array: subCategoryReducer, 
    numOfSubCat : numOfSubCategories
});
export default reducers;