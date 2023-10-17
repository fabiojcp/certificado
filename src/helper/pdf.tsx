import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

import MontSerratLight from "./fonts/Montserrat/static/Montserrat-Light.ttf";
import MontSerratRegular from "./fonts/Montserrat/static/Montserrat-Regular.ttf";
import MontSerratSemiBold from "./fonts/Montserrat/static/Montserrat-SemiBold.ttf";
import MontSerratBold from "./fonts/Montserrat/static/Montserrat-Bold.ttf";
import Cedarville from "./fonts/Cedarville_Cursive/CedarvilleCursive-Regular.ttf";

Font.register({
  family: "Montserrat",

  fonts: [
    {
      src: MontSerratLight,
      fontWeight: 400,
    },
    {
      src: MontSerratRegular,
      fontWeight: 500,
    },
    {
      src: MontSerratSemiBold,
      fontWeight: 600,
    },
    {
      src: MontSerratBold,
      fontWeight: 800,
    },
  ],
});

Font.register({
  family: "Cedarville",
  src: Cedarville,
});

const styles = StyleSheet.create({
  page: {
    // aspectRatio: "1.414 / 1",
    backgroundColor: "#fbfffc",
    width: "100%",
    height: "100%",
    margin: "0",
    padding: "0",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Montserrat",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    height: "90%",
    margin: "5%",
    borderRadius: "5px",
    border: "1px solid #f2b705",
    color: "#252525",
    padding: "10px 0",
    gap: "10px",
  },
  texts: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "6px",
  },
  title: {
    fontSize: "30px",
    fontWeight: 500,
  },
  title2: {
    fontSize: "40px",
    fontWeight: 800,
    marginTop: "-10px",
  },
  texts2: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "6px",
    marginTop: "-60px",
  },
  text: {
    fontSize: "14px",
    fontWeight: 400,
    maxWidth: "60%",
    textAlign: "center",
  },
  signature: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "4px",
    marginBottom: "40px",
    textAlign: "center",
  },
  signatureContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "60%",
    gap: "6px",
    marginBottom: "40px",
  },
  signatureText: {
    fontSize: "14px",
    fontWeight: 500,
    // fontFamily: "Cedarville",
    textAlign: "center",
  },
  signatureTextTransparent: {
    fontSize: "14px",
    fontWeight: 500,
    // fontFamily: "Cedarville",
    color: "white",
  },
  signatureBorder: {
    borderBottom: "1px solid #252525",
    minWidth: "200px",
    width: "100%",
    marginTop: "-4px",   
  },
});

interface PDFProps {
  student: string;
  course: string;
  holder: string;
}

// Create Document Component
const MyDocument = ({ student, course, holder }: PDFProps) => (
  <Document>
    <Page size="A4" style={styles.page} orientation="landscape">
      <View style={styles.container}>
        <View style={styles.texts}>
          <Text style={styles.title}>CERTIFICADO DE</Text>
          <Text style={styles.title2}>CONCLUSÃO</Text>
        </View>

        <View style={styles.texts2}>
          <Text style={styles.text}>
            Certificamos que, para os devidos fins, que
          </Text>
          <Text style={styles.title}>{student}</Text>
          <Text style={styles.text}>
            concluiu o curso "{course}" ministrado por "{holder}".
          </Text>
        </View>

        <View style={styles.signatureContainer}>
          <View style={styles.signature}>
            <Text style={styles.signatureText}>{holder}</Text>
            <View style={styles.signatureBorder}></View>
            <Text style={styles.text}>Instrutor</Text>
          </View>
          <View style={styles.signature}>
            <Text style={styles.signatureTextTransparent}>a</Text>
            <View style={styles.signatureBorder}></View>
            <Text style={styles.text}>Aluno</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
