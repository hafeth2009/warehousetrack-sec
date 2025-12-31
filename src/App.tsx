import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Employees from "./pages/Employees";
import Contracts from "./pages/Contracts";
import Warehouse from "./pages/Warehouse";
import DailyProgram from "./pages/DailyProgram";
import NotFound from "./pages/NotFound";

// Employee sub-pages
import Attendance from "./pages/employees/Attendance";
import Departments from "./pages/employees/Departments";
import Teams from "./pages/employees/Teams";
import JobTitles from "./pages/employees/JobTitles";

// Contract sub-pages
import MaterialDistribution from "./pages/contracts/MaterialDistribution";
import UnifiedContract from "./pages/contracts/UnifiedContract";
import EmergencyWork from "./pages/contracts/EmergencyWork";
import EmergencyPrograms from "./pages/contracts/EmergencyPrograms";

// Warehouse sub-pages
import ItemMovement from "./pages/warehouse/ItemMovement";
import ItemWithdrawal from "./pages/warehouse/ItemWithdrawal";
import ReturnToWarehouse from "./pages/warehouse/ReturnToWarehouse";
import CompanyReturns from "./pages/warehouse/CompanyReturns";
import MaterialTransfer from "./pages/warehouse/MaterialTransfer";
import Scrap from "./pages/warehouse/Scrap";
import UnreceivedMeasurements from "./pages/warehouse/UnreceivedMeasurements";
import WarehouseBalance from "./pages/warehouse/WarehouseBalance";
import Inventory from "./pages/warehouse/Inventory";
import Items from "./pages/warehouse/Items";

// Daily Program sub-pages
import WorkProgram from "./pages/daily-program/WorkProgram";
import DailyProgramSetup from "./pages/daily-program/DailyProgramSetup";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/auth" element={<Auth />} />
              <Route path="/" element={
                <ProtectedRoute>
                  <Index />
                </ProtectedRoute>
              } />
              
              {/* Employees Routes */}
              <Route path="/employees" element={
                <ProtectedRoute>
                  <Employees />
                </ProtectedRoute>
              } />
              <Route path="/employees/attendance" element={
                <ProtectedRoute>
                  <Attendance />
                </ProtectedRoute>
              } />
              <Route path="/employees/departments" element={
                <ProtectedRoute>
                  <Departments />
                </ProtectedRoute>
              } />
              <Route path="/employees/teams" element={
                <ProtectedRoute>
                  <Teams />
                </ProtectedRoute>
              } />
              <Route path="/employees/job-titles" element={
                <ProtectedRoute>
                  <JobTitles />
                </ProtectedRoute>
              } />
              
              {/* Contracts Routes */}
              <Route path="/contracts" element={
                <ProtectedRoute>
                  <Contracts />
                </ProtectedRoute>
              } />
              <Route path="/contracts/material-distribution" element={
                <ProtectedRoute>
                  <MaterialDistribution />
                </ProtectedRoute>
              } />
              <Route path="/contracts/unified" element={
                <ProtectedRoute>
                  <UnifiedContract />
                </ProtectedRoute>
              } />
              <Route path="/contracts/emergency" element={
                <ProtectedRoute>
                  <EmergencyWork />
                </ProtectedRoute>
              } />
              <Route path="/contracts/emergency-programs" element={
                <ProtectedRoute>
                  <EmergencyPrograms />
                </ProtectedRoute>
              } />
              
              {/* Warehouse Routes */}
              <Route path="/warehouse" element={
                <ProtectedRoute>
                  <Warehouse />
                </ProtectedRoute>
              } />
              <Route path="/warehouse/movement" element={
                <ProtectedRoute>
                  <ItemMovement />
                </ProtectedRoute>
              } />
              <Route path="/warehouse/withdrawal" element={
                <ProtectedRoute>
                  <ItemWithdrawal />
                </ProtectedRoute>
              } />
              <Route path="/warehouse/return" element={
                <ProtectedRoute>
                  <ReturnToWarehouse />
                </ProtectedRoute>
              } />
              <Route path="/warehouse/company-returns" element={
                <ProtectedRoute>
                  <CompanyReturns />
                </ProtectedRoute>
              } />
              <Route path="/warehouse/transfer" element={
                <ProtectedRoute>
                  <MaterialTransfer />
                </ProtectedRoute>
              } />
              <Route path="/warehouse/scrap" element={
                <ProtectedRoute>
                  <Scrap />
                </ProtectedRoute>
              } />
              <Route path="/warehouse/unreceived" element={
                <ProtectedRoute>
                  <UnreceivedMeasurements />
                </ProtectedRoute>
              } />
              <Route path="/warehouse/balance" element={
                <ProtectedRoute>
                  <WarehouseBalance />
                </ProtectedRoute>
              } />
              <Route path="/warehouse/inventory" element={
                <ProtectedRoute>
                  <Inventory />
                </ProtectedRoute>
              } />
              <Route path="/warehouse/items" element={
                <ProtectedRoute>
                  <Items />
                </ProtectedRoute>
              } />
              
              {/* Daily Program Routes */}
              <Route path="/daily-program" element={
                <ProtectedRoute>
                  <DailyProgram />
                </ProtectedRoute>
              } />
              <Route path="/daily-program/work" element={
                <ProtectedRoute>
                  <WorkProgram />
                </ProtectedRoute>
              } />
              <Route path="/daily-program/setup" element={
                <ProtectedRoute>
                  <DailyProgramSetup />
                </ProtectedRoute>
              } />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
