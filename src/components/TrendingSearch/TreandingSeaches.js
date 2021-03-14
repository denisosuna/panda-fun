import React, { useState, useEffect } from "react";
import { getTrendingTerms } from "services/giphy";
import Category from "components/Category";

export default function TreandingSeaches() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingTerms().then(setTrends);
  }, []);

  return <Category options={trends} name="Tendencias" />;
}


