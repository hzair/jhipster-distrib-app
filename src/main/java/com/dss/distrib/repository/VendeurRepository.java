package com.dss.distrib.repository;

import com.dss.distrib.domain.Vendeur;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the Vendeur entity.
 */
@SuppressWarnings("unused")
@Repository
public interface VendeurRepository extends JpaRepository<Vendeur, Long> {}
