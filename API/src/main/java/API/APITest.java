package API;


import static io.restassured.RestAssured.basePath;
import static io.restassured.RestAssured.baseURI;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.*;

import org.junit.BeforeClass;
import org.junit.Test;


public class APITest {

	@BeforeClass
	public static void urlSetup() {
		baseURI = "https://admin-advertisement.herokuapp.com";
		basePath = "/api";
	}

	@Test
	public void addAdvertisement() {
		given()
		.contentType("application/json")
			.body("{\"name\":\"new1\","
					+ "\"street\":\"Road Streat\","
					+ "\"rooms\":2,"
					+ "\"price\":\"400\","
					+ "\"status\":false,"
					+ "\"_id\":\"ksksdVGM8W9BWAT\"}")
		.when()
			.post("/advertisements")
		.then()
			.assertThat()
			.statusCode(200);
	}

	@Test
	public void editAdvertisement() {
		
		given()
		.contentType("application/json")
			.body("{\"_id\": \"0B68LpiuMmks7nbV\","
					+ "\"name\": \"Khaled Mcttt\","
					+ "\"street\": \"Heaven Street\","
					+ "\"rooms\": 35,"
					+ "\"price\": \"800\","
					+ "\"status\": false}")
		.when()
			.put("/advertisements/0B68LpiuMmks7nbV")
		.then()
			.assertThat()
			.statusCode(200);
		
	}
}
