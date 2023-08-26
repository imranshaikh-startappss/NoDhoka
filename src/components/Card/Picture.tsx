import React from 'react'
import { StyleSheet, View, Image } from 'react-native';


const Picture = ({ url }: any) => {
  


  return (
    <>
      <Image style = {styles.image}source={url} />
    </>
  )
}
const styles = StyleSheet.create({
  image: {
    width: '210%',
    height: '90%',
    borderRadius: 50,
    }
})
export default Picture
