package com.pikatorrent.PikaTorrent

import android.os.Bundle
import io.flutter.embedding.android.FlutterActivity
import android.system.Os
import kotlin.io.copyTo
import kotlin.io.outputStream
import kotlin.io.use
import android.content.Context
import java.io.File

fun getAssetFilePath(context: Context, assetFileName: String): String? {
    val inputStream = context.assets.open(assetFileName)
    val tempFile = File.createTempFile("cacert", null, context.cacheDir)
    inputStream.use { input ->
        tempFile.outputStream().use { output ->
            input.copyTo(output)
        }
    }
    return tempFile.absolutePath
}

class MainActivity : FlutterActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        Os.setenv("CURL_CA_BUNDLE", getAssetFilePath(this, "cacert-2024-09-24.pem"), true);
        super.onCreate(savedInstanceState)
    }
}
