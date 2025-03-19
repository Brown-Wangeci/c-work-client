import { StyleSheet, Text, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { colors } from '@/theme'

type Props = {
  children: React.ReactNode
  width?: number
  height?: number
}

const SummaryCard = ({children, width, height}: Props) => {
  return (
    <View style={[styles.container, {width, minHeight: height}]}>
      {children}
    </View>
  )
}

export default SummaryCard

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: colors.component.green.bg,
        padding: wp('4%'),
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: colors.component.stroke,
        borderRadius: 12,
    }
})