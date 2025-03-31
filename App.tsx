import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, View } from 'react-native';

const tenisList = [
  { id: 1, nome: "Nike KD 16", numero: 42, cor: "Rosa" },
  { id: 2, nome: "Nike JA 1", numero: 40, cor: "Rosa" },
  { id: 3, nome: "Nike Jordan 4", numero: 43, cor: "Azul" },
];

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {/* Título da loja */}
      <Text style={styles.title}>NIKE</Text>

      {/* Subtítulo */}
      <Text style={styles.subtitle}>seu estilo aqui</Text>

      {/* Lista de produtos */}
      <FlatList
        data={tenisList}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.productList}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Text style={styles.productName}>{item.nome}</Text>
            <Text style={styles.productInfo}>Número: {item.numero}</Text>
            <Text style={styles.productInfo}>Cor: {item.cor}</Text>
          </View>
        )}
      />

      {/* Rodapé */}
      <View style={styles.footer}>
        <Text style={styles.placeholder}>[ Carrinho / Ações ]</Text>
      </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  productList: {
    paddingBottom: 20,
  },
  productCard: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productInfo: {
    fontSize: 14,
    color: '#666',
  },
  placeholder: {
    color: '#aaa',
    fontStyle: 'italic',
    marginVertical: 10,
  },
  footer: {
    paddingVertical: 20,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
};