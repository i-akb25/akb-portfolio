import { useEffect, useState } from "react";

const VisitorCount = () => {
  const [counts, setCounts] = useState({
    total: null,
    unique: null,
  });

  useEffect(() => {
    let cancelled = false;

    const fetchVisitorData = async () => {
      try {
        const response = await fetch("/api/visitor-count", {
          method: "GET",
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(`Visitor count request failed: ${response.status}`);
        }

        const data = await response.json();

        if (!cancelled) {
          setCounts({
            total: Number(data.total) || 0,
            unique: Number(data.unique) || 0,
          });
        }
      } catch (error) {
        console.error("Unable to load visitor count:", error);
      }
    };

    fetchVisitorData();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="text-center text-white text-sm sm:text-base font-medium tracking-wide mt-8">
      <span>Total Visitors: {counts.total ?? "—"}</span> |{" "}
      <span>Unique Visitors: {counts.unique ?? "—"}</span>
    </div>
  );
};

export default VisitorCount;
