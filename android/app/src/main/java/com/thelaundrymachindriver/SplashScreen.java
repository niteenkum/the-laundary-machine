package com.thelaundrymachindriver;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;

public class SplashScreen extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.launch_screen);
        Intent intent = new Intent(this, MainActivity.class);
        intent.putExtras(this.getIntent());
        startActivity(intent);
        finish();
    }
}
