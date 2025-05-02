package com.afif.capacitor.plugin;

import android.util.Log;

public class CapacitorPluginTest {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
