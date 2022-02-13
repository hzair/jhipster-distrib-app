package com.dss.distrib.repository;

import com.dss.distrib.domain.LotCamion;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the LotCamion entity.
 */
@SuppressWarnings("unused")
@Repository
public interface LotCamionRepository extends JpaRepository<LotCamion, Long> {}
