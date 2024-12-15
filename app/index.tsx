import { getMessage } from "@/services/getService";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { useEffect, useState } from "react";
import bluetick from "./../assets/images/bluetick.png";
import ChatHeader from "@/components/ChatHeader";
import ChatInput from "@/components/ChatInput";

export default function HomeScreen() {
  // Message from getService
  const [data, setData] = useState();

  const [allMsgs, setAllMsgs] = useState();

  const fetchData = async () => {
    let response = await getMessage(0);

    // Sorted via date
    const tempMsg = [...response.chats].sort(
      (a, b) => new Date(a.time) - new Date(b.time)
    );

    setAllMsgs(tempMsg);
    setData(response);
  };

  // fetch data
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={tw`flex-1 flex-col relative`}>
      <ChatHeader
        tripName={data?.name}
        tripFrom={data?.from}
        tripTo={data?.to}
      />

      {/* Trip Chat */}
      <View style={tw`h-[74%]`}>
        <FlatList
          data={allMsgs}
          renderItem={renderMessages}
          keyExtractor={(item) => item.id}
        />
      </View>

      {/* Message Input */}
      <ChatInput />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const renderMessages = ({ item }) => {
  return (
    <View style={tw`flex flex-row gap-1 p-2 my-[0.5px] relative w-full`}>
      {!item.sender.self && (
        <View style={tw`relative w-10 h-10`}>
          <Image
            source={{ uri: item.sender.image }}
            style={tw`w-10 h-10 rounded-full`}
            alt={item.sender.user_id}
          />
          {item.sender.is_kyc_verified && (
            <View
              style={tw`absolute bottom-0 right-0 rounded-xl flex justify-center`}
            >
              <Image
                source={bluetick}
                style={tw`w-4 h-4 rounded-full`}
                alt={"bluetick"}
              />
            </View>
          )}
        </View>
      )}
      <View
        style={tw`${
          item.sender.self
            ? "bg-[#1C63D5] ml-auto rounded-tl-xl rounded-tr-xl rounded-bl-xl"
            : "bg-white rounded-tr-xl rounded-bl-xl rounded-br-xl"
        } p-2 shadow-md w-[76%] relative `}
      >
        <Text
          style={tw`${
            item.sender.self ? "text-white" : "text-black"
          } text-[14px]`}
        >
          {item.message}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    gap: 10,
  },
  tripDetail: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    gap: 10,
  },
  temp: {},
});
