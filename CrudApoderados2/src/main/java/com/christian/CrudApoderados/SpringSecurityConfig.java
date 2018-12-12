package com.christian.CrudApoderados;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.christian.CrudApoderados.entity.services.JpaUserDetailsService;
@CrossOrigin (origins = "*")
@Configuration
public class SpringSecurityConfig extends WebSecurityConfigurerAdapter{

	@Autowired
	private JpaUserDetailsService userDetailsService;
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	@Bean
	public BCryptPasswordEncoder bCryptPasswordEncoder() {
	 return new BCryptPasswordEncoder();
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable()
		.authorizeRequests()
			.antMatchers("/allusers").permitAll()
			.antMatchers("/adduser").permitAll()
			.antMatchers("/banks/**").permitAll()
			.antMatchers("/clients/**").permitAll()
			.antMatchers("/apoderados/**").permitAll()
			.antMatchers("/offices/**").permitAll()
			.antMatchers("/signs/**").permitAll()
			.anyRequest().authenticated()
			.and()
		    .httpBasic();
	}
	
	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception{	
		auth.userDetailsService(userDetailsService)
			.passwordEncoder(passwordEncoder);
	}
	
}