import { View, Text, TextInput } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import AttachmentIcon from "react-native-vector-icons/Entypo";
import SendIcon from "react-native-vector-icons/Ionicons";
import tw from "twrnc";
import { useState } from "react";
import Document from "./../assets/images/Document.png";
import Video from "./../assets/images/video.png";
import Camera from "./../assets/images/camera.png";
import { Image } from "react-native";

const ChatInput = () => {
  const [input, setInput] = useState("");
  const onChangeText = (e) => {
    setInput(e.target.value);
  };
  const [toggleOptions, setToggleOptions] = useState(false);
  return (
    <View style={tw`py-1 px-2 w-full flex relative absolute bottom-2`}>
      <View
        style={tw`w-[95%] mx-auto h-11 bg-green-700 bg-white rounded-2xl flex flex-row items-center justify-between px-2 py-1`}
      >
        {/* Input */}
        <View style={tw`w-[70%]`}>
          <TextInput
            onChangeText={onChangeText}
            value={input}
            placeholder="Reply to @Rohit Yadav"
          />
        </View>
        {/* Attachment */}
        {toggleOptions && <AttachmentOptions />}
        <View>
          <TouchableOpacity onPress={() => setToggleOptions(!toggleOptions)}>
            <AttachmentIcon name="attachment" size={24} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <SendIcon name="send-outline" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const AttachmentOptions = () => {
  const options = [
    { icon: Camera, redirect: "camera" },
    { icon: Video, redirect: "video" },
    { icon: Document, redirect: "notes" },
  ];
  return (
    <View
      style={tw`absolute bg-[#008000] h-[10] py-2 rounded-full w-1/2 items-center justify-evenly  flex flex-row -top-10 right-0 `}
    >
      {options.map((item, index) => {
        return (
          <TouchableOpacity>
            <Image source={item.icon} style={tw`h-8 w-8`} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ChatInput;
