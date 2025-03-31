import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, Text, View } from 'react-native';

const tenisList = [
  { id: 1, nome: "Nike KD 16", numero: 42, cor: "Rosa" },
  { id: 2, nome: "Nike JA 1", numero: 40, cor: "Rosa" },
  { id: 3, nome: "Nike Jordan 4", numero: 43, cor: "Azul" },
];

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={tenisList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 15 }}>
            <Text style={{ fontSize: 18 }}>{item.nome}</Text>
            <Text style={{ color: '#666' }}>Número: {item.numero}</Text>
          </View>
        )}
      />
      <StatusBar style="dark" />

      {/* Título da loja */}
      <Text style={styles.title}>NIKE</Text>

      {/* Subtítulo */}
      <Text style={styles.subtitle}>seu estilo aqui</Text>

      {/* Lista de produtos futura */}
      <ScrollView contentContainerStyle={styles.productList}>
        {/* Aqui vão entrar os cards dos produtos futuramente */}
        <Text style={styles.placeholder}>[ Lista de produtos aparece aqui ]</Text>
      </ScrollView>

      {/* Rodapé futuro ou botão de carrinho */}
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
    flexGrow: 1,
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
