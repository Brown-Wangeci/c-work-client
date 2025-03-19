import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { moderateScale } from 'react-native-size-matters'
import { useState, useEffect } from 'react'
import SummaryCard from '@/components/common/SummaryCard'
import { colors } from '@/theme'
import Button from '@/components/ui/Button'
import TaskTab from '@/components/common/TaskTab'
import { SafeAreaView } from 'react-native-safe-area-context'
import TaskPosterTaskCard from '@/components/common/TaskPosterTaskCard'


const TaskPosterDashboard = () => {
  type TaskTabs = 'Active' | 'Pending' | 'Completed' | 'Cancelled'
  const [ selectedTab, setSelectedTab ] = useState<TaskTabs>('Active')
  const [ tasks, setTasks ] = useState([])

  const taskTabs = [
    'Active',
    'Pending',
    'Completed',
    'Cancelled',
  ]

  const fetchTasks = async (selectedTab: TaskTabs ) => {
    // Fetch tasks based on selected tab
    console.log(selectedTab);
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    setTasks([])
    // setTasks(data)
  }

  useEffect(() => {
    fetchTasks(selectedTab);
  }, [selectedTab])

  return (
    <View style={styles.outerContainer}>
      <View style={styles.taskPoster}>
        <View style={styles.imageContainer}>
          <Image
            source={require('@/assets/images/user.jpg')}
            style={styles.image}
          />
        </View>
        <View style={styles.welcomeTextContainer}>
          <Text style={styles.greetings}>Hello,</Text>
          <Text style={styles.name}>John Doe</Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={ styles.scrollContainer }
      >
        <View style={styles.container}>
          <View style={styles.summaryCards}>
            <SummaryCard width={wp('42%')} height={moderateScale(100, 0.2)}>
              <Text style={styles.activeTasksText}>Your active tasks</Text>
              <Text style={styles.numberOfTasks}>3</Text>
            </SummaryCard>
            <SummaryCard width={wp('42%')} height={moderateScale(100, 0.2)}>
              <Text style={styles.percentageText}>You are a top <Text style={styles.percentage}>5%</Text> C-Work Task-Poster</Text>
            </SummaryCard>
          </View>
          <Button title="POST YOUR TASK" type='primary' onPress={() => {}} />
          <Text style={styles.title}>My Tasks</Text>
          <View style={styles.tabsContainer}>
            {taskTabs.map((tab, index) => (
              <TaskTab key={index} title={tab} tab={selectedTab} onPress={()=> setSelectedTab(tab as TaskTabs)} />
            ))}
          </View>
          <TaskPosterTaskCard/>
          <TaskPosterTaskCard/>
          <TaskPosterTaskCard/>
          <TaskPosterTaskCard/>
          <TaskPosterTaskCard/>
          <TaskPosterTaskCard/>
          <TaskPosterTaskCard/>
        </View>
      </ScrollView>
    </View>
  )
}

export default TaskPosterDashboard

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  taskPoster: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: wp('2%'),
    paddingHorizontal: wp('6%'),
    borderBottomWidth: 1,
    borderBottomColor: colors.component.stroke,
  },
  imageContainer: {
    width: wp('16%'),
    height: wp('16%'),
    borderRadius: '50%',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: colors.component.stroke,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  welcomeTextContainer: {
    marginLeft: wp('4%'),
  },
  greetings: {
    color: colors.text.bright,
    fontSize: moderateScale(12, 0.2),
    fontFamily: 'poppins-medium',
  },
  name: {
    color: colors.text.bright,
    fontSize: moderateScale(16, 0.2),
    fontFamily: 'poppins-bold',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: hp('4%'),
  },
  container: {
    width: wp('90%'),
    overflow: 'hidden', 
  },
  summaryCards: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // gap: wp('4%'),
    justifyContent: 'space-between',
    marginBottom: hp('3%'),
  },
  title: {
    color: colors.text.bright,
    fontSize: moderateScale(20, 0.2),
    fontFamily: 'poppins-bold',
    marginTop: hp('2%'),
    marginBottom: hp('1%'),
  },
  activeTasksText: {
    color: colors.text.bright,
    fontSize: moderateScale(14, 0.2),
    fontFamily: 'poppins-medium',
  },
  numberOfTasks: {
    color: colors.text.bright,
    fontSize: moderateScale(24, 0.2),
    fontFamily: 'poppins-bold',
  },
  percentageText: {
    color: colors.text.bright,
    fontSize: moderateScale(14, 0.2),
    fontFamily: 'poppins-medium',
  },
  percentage: {
    fontSize: moderateScale(16, 0.2),
    fontFamily: 'poppins-bold',
  },
  tabsContainer: {
    borderRadius: 20,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: colors.component.stroke,
    paddingVertical: moderateScale(4, 0.2),
    paddingHorizontal: moderateScale(4, 0.2),
    width: '100%',
    flexDirection: 'row',
    // backgroundColor: 'red',
    backgroundColor: colors.component.input,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  text: {
    color: colors.text.bright,
    fontSize: moderateScale(16, 0.2),
    fontFamily: 'poppins-medium',
    marginTop: hp('2%'),
  },
})