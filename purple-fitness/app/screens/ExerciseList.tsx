import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  Pressable,
  Modal,
  ScrollView,
} from "react-native";

const { width } = Dimensions.get("window");
const itemWidth = (width - 48) / 2;

export default function ExerciseList({ exercises }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalVisible(false);
  };

  return (
    <>
      <FlatList
        data={exercises}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.list}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <Pressable style={styles.card} onPress={() => openModal(item)}>
            <Image source={{ uri: item.gifUrl }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
          </Pressable>
        )}
      />

      {selectedItem && (
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <ScrollView style={styles.modalContent}>
            <Image
              source={{ uri: selectedItem.gifUrl }}
              style={styles.modalImage}
            />
            <Text style={styles.modalTitle}>{selectedItem.name}</Text>

            <Text style={styles.label}>
              Equipment:{" "}
              <Text style={styles.value}>{selectedItem.equipment}</Text>
            </Text>

            <Text style={styles.label}>
              Secondary Muscles:{" "}
              <Text style={styles.value}>
                {selectedItem.secondaryMuscles?.join(", ")}
              </Text>
            </Text>

            <Text style={styles.label}>
              Target: <Text style={styles.value}>{selectedItem.target}</Text>
            </Text>

            <Text style={[styles.label, { marginTop: 12 }]}>Instructions:</Text>
            {Array.isArray(selectedItem.instructions) &&
              selectedItem.instructions.map((inst, i) => (
                <Text key={i} style={styles.instructionText}>
                  - {inst}
                </Text>
              ))}

            <Pressable onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </ScrollView>
        </Modal>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 16,
  },
  card: {
    width: itemWidth,
    backgroundColor: "#f4f4f4",
    borderRadius: 12,
    overflow: "hidden",
    alignItems: "center",
    paddingBottom: 8,
  },
  image: {
    width: "100%",
    height: 120,
  },
  name: {
    marginTop: 8,
    fontWeight: "600",
    fontSize: 14,
    textAlign: "center",
    textTransform: "capitalize",
  },
  modalContent: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  modalImage: {
    width: "100%",
    height: 250,
    borderRadius: 12,
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "capitalize",
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 8,
  },
  value: {
    fontWeight: "400",
  },
  instructionText: {
    fontSize: 14,
    marginTop: 4,
    lineHeight: 20,
  },
  closeButton: {
    marginTop: 24,
    backgroundColor: "#222",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
