import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

const StepContent1: React.FC = () => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  // Handle Image Picker
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: false,
      quality: 1,
    });

    if (!result.canceled && selectedImages.length < 4) {
      setSelectedImages([...selectedImages, result.assets[0].uri]);
    }
  };

  return (
    <View>
      <Text className="text-lg font-semibold">
        Consignment is a simple process that allows you to send us your valuable
        items for review. We can estimate its value and eventually offer it at
        one of our auctions!
      </Text>

      <View className="flex-row flex-wrap justify-around mt-6">
        {selectedImages.map((uri, index) => (
          <Image
            key={index}
            source={{ uri }}
            className="w-24 h-24 rounded-lg"
          />
        ))}
        {selectedImages.length < 4 && (
          <TouchableOpacity
            onPress={pickImage}
            className="w-24 h-24 bg-gray-200 rounded-lg justify-center items-center"
          >
            <Text className="text-gray-500 text-lg">+</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default StepContent1;
