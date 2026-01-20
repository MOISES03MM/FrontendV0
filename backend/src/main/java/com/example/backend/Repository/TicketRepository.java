package com.example.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.models.Ticket;

public interface  TicketRepository extends JpaRepository<Ticket, Long>{
    
}
