package com.bolsadeideas.springboot.backend.apirest.repositories;

import org.springframework.data.repository.CrudRepository;

import com.bolsadeideas.springboot.backend.apirest.models.Cliente;

public interface ClientRepository extends CrudRepository<Cliente, Long>{

}
