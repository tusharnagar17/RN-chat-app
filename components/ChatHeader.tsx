import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import EditIcon from "react-native-vector-icons/Feather";
import ThreeDotIcon from "react-native-vector-icons/Entypo";
import Members from "./../assets/images/Members.png";
import Call from "./../assets/images/Call.png";
import Report from "./../assets/images/ReportMessage.png";

const ChatHeader = ({
  tripName,
  tripFrom,
  tripTo,
}: {
  tripName: string;
  tripFrom: string;
  tripTo: string;
}) => {
  const [showOption, setShowOption] = useState(false);

  const menuOptions = [
    {
      icon: Members,
      name: "Members",
      redirect: "Members",
    },
    {
      icon: Call,
      name: "Share Numbers",
      redirect: "Share Numbers",
    },
    {
      icon: Report,
      name: "Report",
      redirect: "Report",
    },
  ];

  return (
    <View style={tw`py-2 px-2 border-gray-300 border-b`}>
      <View style={tw`flex flex-row items-center justify-between px-6 gap-4`}>
        <View style={tw`flex flex-row items-center gap-4`}>
          <BackButton />
          <Text style={{ fontSize: 24, fontWeight: 500 }}>{tripName}</Text>
        </View>
        <RenameButton />
      </View>

      {/* Trip From and Trip To */}
      <View
        style={tw`flex flex-row py-2 mt-4 w-full px-2 justify-between items-center relative`}
      >
        <View>
          <View style={tw`flex flex-row gap-4  items-center`}>
            <Image
              source={{
                uri: "https://fastly.picsum.photos/id/819/160/160.jpg?hmac=duWXAb-022KT3VnXfDCSyr0sLwddRYoP7RMFnidof_g",
              }}
              style={tw`w-10 h-10 rounded-full`}
              alt="GroupImage"
            />
            <View>
              <View style={tw`flex flex-row items-center gap-1 `}>
                <Text style={tw`text-xl`}>From </Text>
                <Text style={tw`text-2xl font-bold`}>{tripFrom}</Text>
              </View>
              <View style={tw`flex flex-row`}>
                <Text style={tw`text-xl`}>To </Text>
                <Text style={tw`text-2xl font-bold`}>{tripTo}</Text>
              </View>
            </View>
          </View>
        </View>
        {/* Option Button */}
        <View>
          <TouchableOpacity onPress={() => setShowOption(!showOption)}>
            <ThreeDotIcon name="dots-three-vertical" size={24} />
          </TouchableOpacity>
        </View>
        {/* Show/Hide Option */}
        {showOption && (
          <View
            style={tw`absolute flex flex-col justify-center z-10 bg-white w-1/2 rounded-xl -bottom-30 p-2 right-2`}
          >
            {menuOptions.map((item, index) => {
              return (
                <View
                  style={tw`${
                    index != menuOptions.length - 1
                      ? "border-b border-gray-300"
                      : ""
                  } flex flex-row gap-2  items-center`}
                >
                  {" "}
                  <View>
                    <Image
                      source={`${item.icon}`}
                      style={tw`h-6 w-6`}
                      alt={item.name}
                    />
                  </View>
                  <TouchableOpacity>
                    <Text style={tw`py-2 text-lg`}>{item.name}</Text>{" "}
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        )}
      </View>
    </View>
  );
};

const BackButton = () => {
  return (
    <TouchableOpacity>
      <Icon name="arrowleft" size={24} />
    </TouchableOpacity>
  );
};

const RenameButton = () => {
  return (
    <TouchableOpacity>
      <EditIcon name="edit" size={20} />
    </TouchableOpacity>
  );
};

export default ChatHeader;
