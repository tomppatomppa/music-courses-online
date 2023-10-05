package com.musiccourse;

import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.test.context.TestPropertySource;

import static org.assertj.core.api.Assertions.assertThat;


@TestPropertySource(properties = {
        "CLOUD_FRONT_URL=ignore",
})
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class DefaultEndpointTest {
    @Value(value="${local.server.port}")
    private int port;

    @Value("${CLOUD_FRONT_URL}")
    private String databaseUrl;

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void greetingShouldReturnDefaultMessage() throws Exception {
        assertThat(this.restTemplate.getForObject("http://localhost:" + port + "/api/se",
                String.class)).contains("Hello");
    }
}
