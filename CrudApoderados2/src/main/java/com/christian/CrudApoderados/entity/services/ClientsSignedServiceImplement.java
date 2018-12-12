package com.christian.CrudApoderados.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.christian.CrudApoderados.entity.dao.IClientsSignedDao;
import com.christian.CrudApoderados.entity.models.ClientsSigned;
import com.christian.CrudApoderados.entity.models.Sign;
@Service
public class ClientsSignedServiceImplement implements IClientsSignedService {
	@Autowired
	private IClientsSignedDao ClientsSignedDao;

	@Override
	public List<ClientsSigned> getAll() {
		return (List<ClientsSigned>) ClientsSignedDao.findAll();
	}

	@Override
	public ClientsSigned getByClientSign(long Id_FirmaCliente) {
	return ClientsSignedDao.findById(Id_FirmaCliente).get();
	}

	@Override
	public ClientsSigned getBySign(long Id_Firma) {
		return ClientsSignedDao.findById(Id_Firma).get();
	}

	@Override
	public ClientsSigned getByClient(long Id_Cliente) {
		return ClientsSignedDao.findById(Id_Cliente).get();
	}

	@Override
	public void post(ClientsSigned clientssigned) {
		ClientsSignedDao.save(clientssigned);
		
	}

	@Override
	public void put(ClientsSigned clientssigned, long Id_FirmaCliente) {
		ClientsSignedDao.findById(Id_FirmaCliente).ifPresent((x)->{ 
			clientssigned.setId_FirmaCliente(Id_FirmaCliente);
			ClientsSignedDao.save(clientssigned);
		});
		
	}

	@Override
	public void delete(long Id_FirmaCliente) {
		ClientsSignedDao.deleteById(Id_FirmaCliente);
		
	}
	

	

}
