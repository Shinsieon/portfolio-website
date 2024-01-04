"use client";
import { useEffect } from "react";
import logVisitor from "../utils/logger";
export default function VisitorSection() {
  useEffect(() => {
    // 호출할 때마다 방문자 수가 증가합니다.
    logVisitor();
  }, []);

  return <h1>hello</h1>;
}
