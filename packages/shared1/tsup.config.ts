import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/main.ts'], // 엔트리 파일 지정
  format: ['cjs', 'esm'], // CommonJS와 ESM 동시 출력
  dts: true, // 타입 정의 파일(.d.ts) 생성
  outDir: 'dist', // 출력 디렉토리 설정
  clean: true, // 기존 빌드 파일 제거
  splitting: false, // 코드 스플리팅 비활성화 (단일 파일 출력)
  sourcemap: true, // 소스 맵 생성
});