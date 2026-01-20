package com.example.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            // 1. ESTA ES LA LÍNEA QUE TE FALTA: Activa CORS con la config de tu WebConfig
            .cors(Customizer.withDefaults()) 
            
            // 2. Deshabilita CSRF para que el POST desde el front funcione
            .csrf(csrf -> csrf.disable())
            
            // 3. Permite todas las peticiones (ya que estás probando)
            .authorizeHttpRequests(auth -> auth
                .anyRequest().permitAll()
            )
            
            // 4. Deshabilita logins por defecto
            .formLogin(form -> form.disable())
            .httpBasic(basic -> basic.disable());

        return http.build();
    }
}