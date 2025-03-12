import 'dart:typed_data';

List<bool> convertBitfieldToBoolList(Uint8List bitfield, int pieceCount) {
  List<bool> piecesAsBool = [];
  int pieceIndex = 0;

  for (int byte in bitfield) {
    for (int bitIndex = 7; bitIndex >= 0; bitIndex--) {
      if (pieceIndex >= pieceCount) {
        return piecesAsBool; // Stop if we've processed all pieces
      }

      int bit = (byte >> bitIndex) & 1;
      piecesAsBool.add(bit == 1);
      pieceIndex++;
    }

    if (pieceIndex >= pieceCount) {
      return piecesAsBool;
    }
  }

  return piecesAsBool;
}
