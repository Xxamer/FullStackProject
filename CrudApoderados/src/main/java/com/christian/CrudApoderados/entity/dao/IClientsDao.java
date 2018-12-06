package com.christian.CrudApoderados.entity.dao;
import org.springframework.data.repository.CrudRepository;
import com.christian.CrudApoderados.entity.models.Clients;

public interface IClientsDao extends CrudRepository<Clients, Long> {

}
