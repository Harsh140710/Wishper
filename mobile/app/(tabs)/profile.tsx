import { useAuth } from '@clerk/clerk-expo'
import { Text, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const ProfileTab = () => {
  const {signOut} = useAuth()
  return (
      <SafeAreaView className="bg-surface flex-1">
        <Text className='text-white'>Profile Tabs</Text>
        <Pressable onPress={() => signOut()} className='mt-4 bg-red-600 px-4 py-2 rounded-lg'>
          <Text className='text-white'>Sign Out</Text>
        </Pressable>
    </SafeAreaView>
  )
}

export default ProfileTab