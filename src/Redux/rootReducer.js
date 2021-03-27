import {combineReducers} from 'redux'
import CartReducer from './Cart/Cart.reducer'
import userReducer from './User/user.reducer'
import CollectionDataReducer from './CollectionData/CollectionData.reducer'
import DirectoryDataReducer from './DirectoryData/DirectoryData.reducer'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig={
   key:'root',
   storage,
   whitelist:['cart']
}
const rootReducer= combineReducers({
   user:userReducer,
   cart:CartReducer,
   collectionData:CollectionDataReducer,
   DirectoryData:DirectoryDataReducer

})
const  persistedReducer=persistReducer(persistConfig,rootReducer)
export default persistedReducer