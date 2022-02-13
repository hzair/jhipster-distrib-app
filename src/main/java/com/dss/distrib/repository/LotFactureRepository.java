package com.dss.distrib.repository;

import com.dss.distrib.domain.LotFacture;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the LotFacture entity.
 */
@SuppressWarnings("unused")
@Repository
public interface LotFactureRepository extends JpaRepository<LotFacture, Long> {}
