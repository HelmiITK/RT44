import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Svg,
  Polygon,
  // Path,
} from "@react-pdf/renderer";
import PropTypes from "prop-types";

// Font.register({ family: "CambriaFamily", src: MyCostumFont });


// Create styles

const styles = StyleSheet.create({
  page: {
    paddingVertical: 15,
    paddingHorizontal: 40,
  },
  section: {
    marginBottom: 10,
    alignItems: "center",
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
  },
  section2: {
    marginBottom: 10,
    flexDirection: "raw",
    alignItems: "flex-end",
  },
  section3: {
    marginTop: 5,
    display: "flex",
  },
  section4: {
    // marginTop: 3,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header: {
    // fontFamily: "FamilyName",
    fontWeight: "bold",
    fontSize: 13,
    textAlign: "center",
  },
  header1: {
    fontSize: 15,
    textAlign: "center",
  },
  header2: {
    // fontFamily: "FamilyName",
    paddingTop: 2,
    paddingBottom: 2,
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center",
  },
  textHeader: {
    fontWeight: "black",
    fontSize: 10,
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
  },
  line1: {
    height: 1,
    marginBottom: 1,
    backgroundColor: "black",
    width: "100%",
  },
  line2: {
    height: 2,
    backgroundColor: "black",
    width: "100%",
  },
  text1: {
    fontSize: 14,
    marginBottom: 5,
    textDecoration: "underline",
    fontWeight: "9000",
  },
  text2: {
    fontSize: 14,
    paddingLeft: 2,
    marginBottom: 5,
    display: "flex",
  },
  text3: {
    fontSize: 11,
    marginTop: 4,
    display: "flex",
  },
  text4: {
    fontSize: 11,
    marginTop: 4,
    marginRight: 130,
  },
  text5: {
    fontSize: 11,
    marginTop: 4,
    marginRight: 78,
  },
  text6: {
    fontSize: 11,
    marginTop: 4,
    marginRight: 113,
  },
  text7: {
    fontSize: 11,
    textDecoration: "underline",
  },
  text8: {
    fontSize: 11,
  },
  text9: {
    fontSize: 10,
  },
  text10: {
    fontSize: 10,
    paddingLeft: 4,
  },
  text11: {
    fontSize: 10,
    paddingLeft: 10,
  },
  row: {
    flexDirection: "row",
    marginTop: 15,
    fontSize: 10,
    display: "flex",
    alignItems: "center",
  },
  row1: {
    flexDirection: "row",
    marginTop: 3,
    fontSize: 10,
    display: "flex",
    // alignItems: "center",
    flexWrap: "wrap",
  },
  row2: {
    flexDirection: "column",
    marginTop: 7,
    fontSize: 10,
  },
  row3: {
    flexDirection: "column",
    marginRight: 50,
    marginTop: 7,
    fontSize: 10,
  },
  row4: {
    flexDirection: "row",
    marginTop: 7,
    fontSize: 10,
    display: "flex",
    alignItems: "center",
  },
  row5: {
    flexDirection: "row",
    marginTop: 2,
    fontSize: 10,
    display: "flex",
    alignItems: "center",
  },
  row6: {
    flexDirection: "row",
    marginTop: 5,
    fontSize: 11,
    display: "flex",
    alignItems: "center",
  },
  label: {
    width: 100,
    fontSize: 10,
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableColHeaderNo: {
    width: "10%", // Adjusted width for No column
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    backgroundColor: "#f2f2f2",
    padding: 5,
  },
  tableColHeader: {
    width: "45%", // Adjusted width for other columns
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    backgroundColor: "#f2f2f2",
    padding: 5,
  },
  tableColNo: {
    width: "10%", // Adjusted width for No column
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 10,
  },
  tableCol: {
    width: "45%", // Adjusted width for other columns
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 10,
  },
  tableCellHeader: {
    margin: "auto",
    fontSize: 10,
    fontWeight: "bold",
  },
  tableCell: {
    height: 50,
    margin: "auto",
    fontSize: 10,
  },
  signature: {
    marginTop: 20,
    alignItems: "flex-end", // Mengatur tanda tangan di sebelah kanan
    paddingRight: 40, // Memberikan jarak dari sisi kanan
  },
  signatureTitle: {
    fontSize: 12,
    marginBottom: 10,
    marginRight: 37,
  },
  signatureTitle1: {
    fontSize: 12,
    marginBottom: 10,
    textDecoration: "underline",
  },
  signatureSpacer: {
    height: 40,
  },
});

const Table = ({ children }) => <View style={styles.table}>{children}</View>;

const TableRow = ({ children }) => (
  <View style={styles.tableRow}>{children}</View>
);

const TableHeaderCell = ({ children, isNo }) => (
  <View style={isNo ? styles.tableColHeaderNo : styles.tableColHeader}>
    <Text style={styles.tableCellHeader}>{children}</Text>
  </View>
);

const TableCell = ({ children, isNo }) => (
  <View style={isNo ? styles.tableColNo : styles.tableCol}>
    <Text style={styles.tableCell}>{children}</Text>
  </View>
);

const MyDocument = ({ letter }) => {
  const religions = [
    { id: 1, name: "Islam" },
    { id: 2, name: "Kristen" },
    { id: 3, name: "Katholik" },
    { id: 4, name: "Hindu" },
    { id: 5, name: "Budha" },
    { id: 6, name: "Khonghucu" },
  ];
  return (
    <Document pageLayout="singlePage">
      <Page size="RA4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>KECAMATAN BALIKPAPAN SELATAN</Text>
          <Text style={styles.header1}>KELURAHAN SEPINGGAN BARU</Text>
          <Text style={styles.header2}>RUKUN TETANGGA 44</Text>
          <Text style={styles.textHeader}>
            Perum. Sepinggan Pratama Telp. 081228478010 WA. 08115400017 Kode Pos
            76115
          </Text>
          <View style={styles.line1} />
          <View style={styles.line2} />
        </View>
        <View style={styles.section2}>
          <Text style={styles.text3}>
            Balikpapan, ..........................................
          </Text>
          <Text style={styles.text4}>Kepada Yth.</Text>
          <Text style={styles.text5}>Lurah Sepinggan Baru</Text>
          <Text style={styles.text6}>
            di – <Text style={styles.text7}>Balikpapan</Text>
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text1}>SURAT PENGANTAR</Text>
          <Text style={styles.text8}>
            Nomor : SPGB/RT.44 /<Text>{"        "}</Text>/20….
          </Text>
        </View>
        <View style={styles.section3}>
          <Text style={styles.text9}>
            Surat Pengantar ini Diberikan Kepada :
          </Text>
          <View style={styles.row1}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ width: 150 }}>Nama Lengkap</Text>
              <Text>: {letter.fullName}</Text>
            </View>
          </View>
          <View style={styles.row1}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ width: 150 }}>Jenis Kelamin</Text>
              <Text>: </Text>
              <Svg height="10" width="10">
                <Polygon
                  points="0,0 10,0 10,10 0,10"
                  fill={letter.gender === "Pria" ? "black" : "none"}
                  stroke="black"
                  strokeWidth={1}
                />
              </Svg>
              <Text style={styles.text10}>Laki-laki</Text>
              <Text>{"    "}</Text>
              <Svg height="10" width="10">
                <Polygon
                  points="0,0 10,0 10,10 0,10"
                  fill={letter.gender === "Wanita" ? "black" : "none"}
                  stroke="black"
                  strokeWidth={1}
                />
              </Svg>
              <Text style={styles.text10}>Perempuan</Text>
            </View>
          </View>
          <View style={styles.row1}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ width: 150 }}>Tempat / Tgl. Lahir</Text>
              <Text>: {letter.placeDateBday}</Text>
            </View>
          </View>
          <View style={styles.row1}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ width: 150 }}>Status Perkawinan</Text>
              <Text>: </Text>
              <Svg height="10" width="10">
                <Polygon
                  points="0,0 10,0 10,10 0,10"
                  fill={letter.status === "Belum Kawin" ? "black" : "none"}
                  stroke="black"
                  strokeWidth={1}
                />
              </Svg>
              <Text style={styles.text10}>Belum Kawin</Text>
              <Text>{"    "}</Text>
              <Svg height="10" width="10">
                <Polygon
                  points="0,0 10,0 10,10 0,10"
                  fill={letter.status === "Kawin" ? "black" : "none"}
                  stroke="black"
                  strokeWidth={1}
                />
              </Svg>
              <Text style={styles.text10}>Kawin</Text>
              <Text>{"    "}</Text>
              <Svg height="10" width="10">
                <Polygon
                  points="0,0 10,0 10,10 0,10"
                  fill={letter.status === "Janda/Duda" ? "black" : "none"}
                  stroke="black"
                  strokeWidth={1}
                />
              </Svg>
              <Text style={styles.text10}>Janda / Duda</Text>
            </View>
          </View>
          <View style={styles.row1}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ width: 150 }}>Agama</Text>
              <Text>: </Text>
              {religions.map((religion) => (
                <View key={religion.id} style={{ flexDirection: "row" }}>
                  <Text>{religion.id}.</Text>
                  <Text
                    style={[
                      styles.text10,
                      religion.name !== letter.religion && {
                        textDecoration: "line-through",
                      },
                    ]}
                  >
                    {religion.name}
                  </Text>
                  <Text>{"    "}</Text>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.row1}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ width: 150 }}>Pekerjaan</Text>
              <Text>: {letter.work}</Text>
            </View>
          </View>
          <View style={styles.row1}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ width: 150 }}>Golongan Darah</Text>
              <Text>: </Text>
              <Svg height="10" width="10">
                <Polygon
                  points="0,0 10,0 10,10 0,10"
                  fill={letter.blood === "A" ? "black" : "none"}
                  stroke="black"
                  strokeWidth={1}
                />
              </Svg>
              <Text style={styles.text10}>A</Text>
              <Text>{"    "}</Text>
              <Svg height="10" width="10">
                <Polygon
                  points="0,0 10,0 10,10 0,10"
                  fill={letter.blood === "B" ? "black" : "none"}
                  stroke="black"
                  strokeWidth={1}
                />
              </Svg>
              <Text style={styles.text10}>B</Text>
              <Text>{"    "}</Text>
              <Svg height="10" width="10">
                <Polygon
                  points="0,0 10,0 10,10 0,10"
                  fill={letter.blood === "O" ? "black" : "none"}
                  stroke="black"
                  strokeWidth={1}
                />
              </Svg>
              <Text style={styles.text10}>O</Text>
              <Text>{"    "}</Text>
              <Svg height="10" width="10">
                <Polygon
                  points="0,0 10,0 10,10 0,10"
                  fill={letter.blood === "AB" ? "black" : "none"}
                  stroke="black"
                  strokeWidth={1}
                />
              </Svg>
              <Text style={styles.text10}>AB</Text>
            </View>
          </View>
          <View style={styles.row1}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ width: 150 }}>Kewarganegaraan</Text>
              <Text>: </Text>
              <Svg height="10" width="10">
                <Polygon
                  points="0,0 10,0 10,10 0,10"
                  fill={letter.citizenship === "WNI" ? "black" : "none"}
                  stroke="black"
                  strokeWidth={1}
                />
              </Svg>
              <Text style={styles.text10}>WNI</Text>
              <Text>{"    "}</Text>
              <Svg height="10" width="10">
                <Polygon
                  points="0,0 10,0 10,10 0,10"
                  fill={letter.citizenship === "WNA" ? "black" : "none"}
                  stroke="black"
                  strokeWidth={1}
                />
              </Svg>
              <Text style={styles.text10}>WNA</Text>
            </View>
          </View>
          <View style={styles.row1}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ width: 150 }}>Alamat</Text>
              <Text>: </Text>
              <Text style={{ flexWrap: "wrap", width: 300 }}>
                {letter.address}
              </Text>
            </View>
          </View>
          <View style={styles.row1}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ width: 150 }}>N I K</Text>
              <Text>: {letter.nik}</Text>
            </View>
          </View>
          <View style={styles.row1}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ width: 150 }}>Nomor KK</Text>
              <Text>: {letter.nkk}</Text>
            </View>
          </View>

          <View style={styles.row1}>
            <Text>Maksud / Tujuan mengurus {"  "}: </Text>
          </View>
          {/* SECTION 4 */}
          <View style={styles.section4}>
            <View style={styles.row2}>
              <View style={styles.row1}>
                <Svg height="20" width="20">
                  <Polygon
                    points="0,0 20,0 20,20 0,20"
                    fill={letter.perpous === "KTP" && "KK" ? "black" : "none"}
                    stroke="black"
                    strokeWidth={1}
                  />
                </Svg>
                <Text style={styles.text11}>KTP / KK</Text>
              </View>
              <View style={styles.row1}>
                <Svg height="20" width="20">
                  <Polygon
                    points="0,0 20,0 20,20 0,20"
                    fill={letter.perpous === "Akte" ? "black" : "none"}
                    stroke="black"
                    strokeWidth={1}
                  />
                </Svg>
                <Text style={styles.text11}>
                  Pengantar Akte Kelahiran / Kenal lahir
                </Text>
              </View>
              <View style={styles.row1}>
                <Svg height="20" width="20">
                  <Polygon
                    points="0,0 20,0 20,20 0,20"
                    fill={letter.perpous === "kematian" ? "black" : "none"}
                    stroke="black"
                    strokeWidth={1}
                  />
                </Svg>
                <Text style={styles.text11}>Pengantar Surat Kematian</Text>
              </View>

              <View style={styles.row1}>
                <Svg height="20" width="20">
                  <Polygon
                    points="0,0 20,0 20,20 0,20"
                    fill={letter.perpous === "nikah" ? "black" : "none"}
                    stroke="black"
                    strokeWidth={1}
                  />
                </Svg>
                <Text style={styles.text11}>Pengantar Nikah</Text>
              </View>
              <View style={styles.row1}>
                <Svg height="20" width="20">
                  <Polygon
                    points="0,0 20,0 20,20 0,20"
                    fill={letter.perpous === "pindah" ? "black" : "none"}
                    stroke="black"
                    strokeWidth={1}
                  />
                </Svg>
                <Text style={styles.text11}>Pengantar Permohonan Pindah</Text>
              </View>
            </View>
            <View style={styles.row3}>
              <View style={styles.row1}>
                <Svg height="20" width="20">
                  <Polygon
                    points="0,0 20,0 20,20 0,20"
                    fill={letter.perpous === "ttl" ? "black" : "none"}
                    stroke="black"
                    strokeWidth={1}
                  />
                </Svg>
                <Text style={styles.text11}>
                  Surat Ket. Domisili Tempat Tinggal
                </Text>
              </View>
              <View style={styles.row1}>
                <Svg height="20" width="20">
                  <Polygon
                    points="0,0 20,0 20,20 0,20"
                    fill={letter.perpous === "jalan" ? "black" : "none"}
                    stroke="black"
                    strokeWidth={1}
                  />
                </Svg>
                <Text style={styles.text11}>Surat Ket. Bepergian / Jalan</Text>
              </View>
              <View style={styles.row1}>
                <Svg height="20" width="20">
                  <Polygon
                    points="0,0 20,0 20,20 0,20"
                    fill={letter.perpous === "usaha" ? "black" : "none"}
                    stroke="black"
                    strokeWidth={1}
                  />
                </Svg>
                <Text style={styles.text11}>Surat Ket. Domisili Usaha</Text>
              </View>

              <View style={styles.row1}>
                <Svg height="20" width="20">
                  <Polygon
                    points="0,0 20,0 20,20 0,20"
                    fill={letter.perpous === "skck" ? "black" : "none"}
                    stroke="black"
                    strokeWidth={1}
                  />
                </Svg>
                <Text style={styles.text11}>S K C K</Text>
              </View>
              <View style={styles.row1}>
                <Svg height="20" width="20">
                  <Polygon
                    points="0,0 20,0 20,20 0,20"
                    stroke="black"
                    strokeWidth={1}
                  />
                </Svg>
                <Text style={styles.text11}>
                  Lain – lain ...................................
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.row4}>
            <Text>Alamat yang dituju : {"  "}</Text>
            <Text>Jl. ............................... {"  "}</Text>
            <Text>No. ..... {"  "}</Text>
            <Text>RT. .....</Text>
          </View>
          <View style={styles.row5}>
            <Text>
              {"                                    "}
              {"                                "} Kelurahan
              ...............................
            </Text>
          </View>
          <View style={styles.row5}>
            <Text>
              {"                                    "}
              {"                                "} Kecamatan
              ...............................
            </Text>
          </View>
          <View style={styles.row5}>
            <Text>
              {"                                    "}
              {"                                "} Kab. / Kota
              ...............................
            </Text>
          </View>
          <View style={styles.row5}>
            <Text>
              {"                                    "}
              {"                                "} Provinsi
              ...............................
            </Text>
          </View>
          <View style={styles.row5}>
            <Text>Jumlah Pengikut : .................... Orang</Text>
          </View>
          <View style={styles.section3}>
            {/* Add Table */}
            <Table>
              <TableRow>
                <TableHeaderCell isNo>No</TableHeaderCell>
                <TableHeaderCell>Nama</TableHeaderCell>
                <TableHeaderCell>HUB. KELUARGA</TableHeaderCell>
              </TableRow>
              <TableRow>
                <TableCell isNo></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </Table>
          </View>
          <View style={styles.row6}>
            <Text>
              {"              "}
              {"                 "} Demikian Surat Pengantar ini diberikan
              kepada yang bersangkutan untuk dipergunakan sebagaimana mestinya.
            </Text>
          </View>
          <View style={styles.signature}>
            <Text style={styles.signatureTitle}>Ketua RT. 44</Text>
            <View style={styles.signatureSpacer} />
            <Text style={styles.signatureTitle1}>GINANJAR KARTASASMITA</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;

MyDocument.propTypes = {
  children: PropTypes.node,
  letter: PropTypes.object,
};
