package com.calculator;

import javax.jws.WebService;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

@WebService
public class Calculate {
	
	public String postHome(int buttonValue, String fullString){
		System.out.println("in jsbce");
		System.out.println(fullString);
		System.out.println(buttonValue);
		fullString = fullString + buttonValue;
		System.out.println(fullString);
		System.out.println(" full String : "+fullString);
		return fullString;
	}
	
	
	public String calculated(String fullString){
		
		ScriptEngineManager manager = new ScriptEngineManager();
		ScriptEngine engine = manager.getEngineByName("js");
		try {
			Object result = engine.eval(fullString);
		} catch (ScriptException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		System.out.println("in jsbce claculate method");
		System.out.println(" full String : "+fullString);
		return result;
	}


}
