package com.christian.CrudApoderados.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.christian.CrudApoderados.entity.dao.IClientsDao;
import com.christian.CrudApoderados.entity.models.Clients;

@Service
public class ClientsServiceImplement implements IClientsService {
	@Autowired
	private IClientsDao ClientsDao;
	@Override
	public List<Clients> getAll() {
		return (List<Clients>) ClientsDao.findAll();
	}

	@Override
	public Clients get(long id_Cliente) {
		return ClientsDao.findById(id_Cliente).get();
	}

	@Override
	public void post(Clients clients) {
		ClientsDao.save(clients);
		
	}

	@Override
	public void put(Clients clients, long id_Cliente) {
		ClientsDao.findById(id_Cliente).ifPresent((x)->{
			clients.setId_Cliente(id_Cliente);
			ClientsDao.save(clients);
		});
	}

	@Override
	public void delete(long id_Cliente) {
		ClientsDao.deleteById(id_Cliente);
		
	}

}
