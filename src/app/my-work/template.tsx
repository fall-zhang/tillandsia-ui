export default function Template ({ children }: { children: React.ReactNode }) {
  return <div>
    <h2>所有的子页面都要嵌套在这里</h2>
    {children}
  </div>
}