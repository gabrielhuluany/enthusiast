package Enthusiast;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfiguration implements WebMvcConfigurer {

    public void addCorsMappings(CorsRegistry registry) {
        /* Proibindo requisições de origens diferentes (padrão Cors) */
        registry.addMapping("/**")
                /* Altere o endereço abaixo com a porta do angular. A porta padrão do angular é a 4200 */
                .allowedOrigins("http://localhost:4200")
                /* Métodos de requisição permitidos em nossa API */
                .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD", "TRACE", "CONNECT");
    }
}