import { Pressable, StyleSheet, Text, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { moderateScale } from 'react-native-size-matters'
import React from 'react'
import Button from '../ui/Button'
import { colors } from '@/theme'

const TaskPosterTaskCard = () => {

  const task = {
    title: 'Grocery Shopping & Delivery',
    description: 'I need someone to help me buy groceries and deliver them to my house. I will provide a list of items to buy and the delivery address. The tasker will need to have a car to deliver the groceries.',
    offer: 100,
    location: 'Siwaka, Madaraka',
    date: '2022-10-10',
    time: '10:00 AM',
    duration: 2,
    tasker: {
      name: 'John Doe',
      rating: 4.5,
      reviews: 100,
      image: 'https://randomuse	r.me/api/port',
    },

  } 

  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };


  return (
    <View style={styles.card}>
      <Text style={styles.title}>{truncateText(task.title, 5)}</Text>
      <Text style={styles.textTitle}>Tasker: <Text style={styles.improvedText}>{task.tasker.name}</Text></Text>
      <Text style={styles.textTitle}>Location: <Text style={styles.improvedText}>{task.location}</Text></Text>
      <Text style={styles.textTitle}>Date: <Text style={styles.improvedText}>{task.date} . {task.time}</Text></Text>
      <Text style={styles.textTitle}>Initial Offer: <Text style={styles.improvedText}>{task.offer}</Text></Text>
      <View style={styles.offerContainer}>
        <Text style={styles.offer}>Final: <Text style={styles.improvedOfferText}>Ksh.{task.offer}</Text></Text>
        <View>
          <Button title="Track" type="primary" small onPress={() => {}} />
        </View>
      </View>
    </View>
  )
}

export default TaskPosterTaskCard

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: colors.component.bg,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: colors.component.stroke,
    borderRadius: 12,
    padding: wp('4%'),
    marginTop: hp('2%'),
  },
  title: {
    color: colors.text.bright,
    fontSize: moderateScale(16, 0.2),
    fontFamily: 'poppins-bold',
  },
  textTitle: {
    color: colors.text.light,
    fontSize: moderateScale(12, 0.2),
    fontFamily: 'poppins-regular',
  },
  improvedText: {
    color: colors.text.bright,
    fontSize: moderateScale(14, 0.2),
    fontFamily: 'poppins-medium',
  },
  offerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp('1%'),
  },
  offer: {
    color: colors.text.bright,
    fontSize: moderateScale(14, 0.2),
    fontFamily: 'poppins-bold',
  },
  improvedOfferText: {
    color: colors.text.green,
    fontSize: moderateScale(16, 0.2),
    fontFamily: 'poppins-bold',
  },
  
})