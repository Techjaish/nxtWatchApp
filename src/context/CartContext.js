import React from 'react'

const CartContext = React.createContext({
  isDarkTheme: false,
  savedVideos: [],
  addToSaveVideos: () => {},
  activeTabItem: () => {},
  onChangeTheme: () => {},
  removeSaveVideos: () => {},
})

export default CartContext
