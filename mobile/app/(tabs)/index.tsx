import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Text } from 'react-native'
import * as Sentry from '@sentry/react-native';

const ChatsTab = () => {
  return (
    <SafeAreaView className="bg-surface flex-1">
      <Text className='text-white'>Chats Tab</Text>
    </SafeAreaView>
  )
}

export default ChatsTab