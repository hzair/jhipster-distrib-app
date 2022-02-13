package com.dss.distrib.repository;

import com.dss.distrib.domain.Camion;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the Camion entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CamionRepository extends JpaRepository<Camion, Long> {}
