import 'dart:typed_data';

import 'package:pikatorrent/utils/bitfield.dart';
import 'package:test/test.dart';

void main() {
  group('convertBitfieldToBoolList', () {
    test('full bitfield', () {
      Uint8List bitfield = Uint8List.fromList([255, 255]);
      int pieceCount = 16;
      List<bool> expected = List.filled(16, true);

      expect(convertBitfieldToBoolList(bitfield, pieceCount), equals(expected));
    });

    test('partial bitfield', () {
      Uint8List bitfield = Uint8List.fromList([192, 0]); // 11000000 00000000
      int pieceCount = 16;
      List<bool> expected = [
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ];

      expect(convertBitfieldToBoolList(bitfield, pieceCount), equals(expected));
    });

    test('bitfield with fewer pieces than available bits', () {
      Uint8List bitfield = Uint8List.fromList([255, 255]);
      int pieceCount = 10;
      List<bool> expected = List.filled(10, true);

      expect(convertBitfieldToBoolList(bitfield, pieceCount), equals(expected));
    });

    test('empty bitfield', () {
      Uint8List bitfield = Uint8List.fromList([]);
      int pieceCount = 10;
      List<bool> expected = [];

      expect(convertBitfieldToBoolList(bitfield, pieceCount), equals(expected));
    });

    test('one byte bitfield, some missing', () {
      Uint8List bitfield = Uint8List.fromList([170]); // 10101010
      int pieceCount = 8;
      List<bool> expected = [
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false
      ];

      expect(convertBitfieldToBoolList(bitfield, pieceCount), equals(expected));
    });

    test('pieceCount greater than bitfield length', () {
      Uint8List bitfield = Uint8List.fromList([255]);
      int pieceCount = 9;
      List<bool> expected = [true, true, true, true, true, true, true, true];

      expect(convertBitfieldToBoolList(bitfield, pieceCount), equals(expected));
    });
  });
}
